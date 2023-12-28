import { forwardRef } from "react";
import { Container } from "./styles";

export const Button = forwardRef(function Button(
  { title, isText = false, isCenter = false, onClick, icon: Icon, ...rest },
  ref
) {
  return (
    <Container
      $istext={isText}
      $iscenter={isCenter}
      onClick={onClick}
      $hasicon={!!Icon}
      ref={ref}
      {...rest}
    >
      {Icon && <Icon />}
      {title}
    </Container>
  );
});
