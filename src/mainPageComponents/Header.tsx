type HeaderProps = {
  children: React.ReactNode;
};

// children props를 이용해 Header 컴포넌트 추상화(재사용성⬆️)
function Header({ children }: HeaderProps) {
  return <header>{children}</header>;
}

export default Header;
