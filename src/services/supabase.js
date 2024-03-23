import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wtwkdbvtalhoobullpkc.supabase.co";
const supabasenKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0d2tkYnZ0YWxob29idWxscGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMDg2NzksImV4cCI6MjAyNjU4NDY3OX0.VdYBRNp3QI7xcuIZRe--1FMdBt1K4y4_LgYbFmIPfmE";

const supabase = createClient(supabaseUrl, supabasenKey);

export default supabase;
