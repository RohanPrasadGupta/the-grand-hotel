import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi";
import { HiCalendarDays, HiHomeModern } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const MainNav = () => {
  return (
    <div>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="dashboard">
              <HiOutlineHome />
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="bookings">
              <HiCalendarDays />
              Bookings
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="cabins">
              <HiHomeModern />
              Cabins
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="users">
              <FaUserTie />
              Users
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="settings">
              <IoSettingsOutline />
              Settings
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="database">
              <FaDatabase />
              database
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </div>
  );
};

export default MainNav;
