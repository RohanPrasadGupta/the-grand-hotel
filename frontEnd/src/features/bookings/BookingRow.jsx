import styled from "styled-components";
import { format, isToday } from "date-fns";
import PropTypes from "prop-types";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({ booking }) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  // console.log(booking);
  const {
    endDate,
    numNights,
    startDate,
    status,
    totalPrice,
    guestId,
    cabinId,
  } = booking;

  // console.log(guestId, cabinId);

  const guestName = guestId[0].fullName;
  const email = guestId[0].email;
  const cabinName = cabinId[0].name;

  // console.log(guestName, cabinName, email);

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
    </Table.Row>
  );
}

BookingRow.propTypes = {
  booking: PropTypes.shape({
    endDate: PropTypes.instanceOf(Date).isRequired,
    numNights: PropTypes.number.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.oneOf(["unconfirmed", "checked-in", "checked-out"])
      .isRequired,
    totalPrice: PropTypes.number.isRequired,
    guestId: PropTypes.string.isRequired, // Assuming guestId is a string
    cabinId: PropTypes.string.isRequired, // Assuming cabinId is a string
  }).isRequired,
};

export default BookingRow;
