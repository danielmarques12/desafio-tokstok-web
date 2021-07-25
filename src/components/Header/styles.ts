import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 70px;
  overflow: hidden;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  margin-bottom: 45px;

  nav {
    ul {
      display: flex;

      li {
        cursor: pointer;
        list-style: none;
        padding: 17.5px;

        &:first-child {
          margin-right: auto;
        }

        a {
          text-decoration: none;
          color: #000;
          font-size: 18px;
        }

        &:hover {
          background: #f5f6f8;
        }
      }
    }
  }
`;
