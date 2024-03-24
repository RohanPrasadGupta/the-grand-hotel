import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabin could not load data");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  // https://wtwkdbvtalhoobullpkc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  console.log(newCabin, id);

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  console.log("Image Name: ", imageName);
  console.log("NewCabin:", newCabin);
  console.log(imagePath);

  // 1. Create and Edit Cabin Combined
  let query = supabase.from("cabins");

  // A. Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B. Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  // console.log(id);
  // console.log(query);
  console.log(imagePath);
  const { data, error } = await query.select().single();

  console.log("data on Update:", data);

  if (error) {
    console.log(error);
    throw new Error("Unable to Create Cabin");
  }

  // Upload file using standard upload
  const { error: StorageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  if (StorageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log("Unable to updaload the image and Unable to create the Cabin");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted...");
  }
  return data;
}
