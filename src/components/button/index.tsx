import { Button as BaseButton } from "@chakra-ui/react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (title?: string) => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <BaseButton colorScheme="blue" onClick={onClick} type="submit">
      {children}
    </BaseButton>
  );
}
