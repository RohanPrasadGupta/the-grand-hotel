import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { useDeleteCabin } from "./useDeleteCabin";
import { CiEdit, CiTrash } from "react-icons/ci";
import styled from "styled-components";
import altImage from "../../data/cabins/cabin-001.jpg";
import PropTypes from "prop-types";
import CreateCabinForm from "./CreateCabinForm";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const BtnDic = styled.div`
  display: flex;
  gap: 5px;
  padding: 5px;
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const { _id: cabinId, discount, maxCapacity, name, regularPrice } = cabin;

  // console.log(cabinId);

  return (
    <>
      <TableRow>
        <Img src={altImage} alt={altImage} />
        <Cabin>{name}</Cabin>
        <div>Fit for {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <BtnDic>
          <button onClick={() => setShowForm((show) => !show)}>
            <CiEdit />
          </button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <CiTrash />
          </button>
        </BtnDic>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

CabinRow.propTypes = {
  cabin: PropTypes.shape({
    discount: PropTypes.number.isRequired,
    maxCapacity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    regularPrice: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    // Add more prop types as needed
  }).isRequired,
};

export default CabinRow;
