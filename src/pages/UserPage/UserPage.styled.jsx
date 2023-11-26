import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding-top: 40px;

  @media (min-width: 768px) {
    width: 768px;
    padding-top: 60px;
  }

  @media (min-width: 1280px) {
    display: flex;
    width: 1280px;
  }
`;

export const Section = styled.section`
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 46px;
`;

export const H2 = styled.h2`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.8px;
  margin-bottom: 24px;
`;

export const UserCardWrapper = styled.form`
  position: relative;
  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 25px 8px;
  width: 280px;
  flex-shrink: 0;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 704px;
    padding-right: 76px;
    padding-bottom: 58px;
  }

  @media (min-width: 1280px) {
    display: block;
    width: 395px;
    padding-right: 0;
  }
`;

export const UserProfileImage = styled.div`
  width: 182px;
  height: 182px;
  flex-shrink: 0;
  background-color: grey;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  @media (min-width: 768px) {
    width: 320px;
  }
  @media (min-width: 1280px) {
    width: 356px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.56px;
  width: 100px;
  padding: 4px;
`;

export const Span = styled.input`
  display: flex;
  font-size: 12px;
  letter-spacing: 0.48px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid var(--unnamed, #54adff);
  padding: 4px 10px;
`;

export const LogoutButton = styled.button`
  position: absolute;
  left: 10px;
  bottom: 14px;
  @media (min-width: 768px) {
    left: 20px;
  }
`;

export const EditProfileButton = styled.button`
  position: absolute;
  right: 10px;
  top: 14px;
  background-color: transparent;
  border: transparent;
  @media (min-width: 768px) {
    right: 20px;
  }
`;

export const SaveButton = styled.button`
  position: absolute;
  left: 10px;
  bottom: 14px;
  @media (min-width: 768px) {
    left: 20px;
  }
`;
