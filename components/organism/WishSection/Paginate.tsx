import { Button, ButtonGroup, Container, Center } from "@chakra-ui/react";
import { WishPaginationTypes } from "./wishSection.interfaces";

export default function Paginate({
  number,
  setNumber,
  tableData,
  postPerPage,
}: Readonly<WishPaginationTypes>) {
  const ChangePage = (pageNumber: number) => {
    setNumber(pageNumber);
  };

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(tableData.length / postPerPage); i++) {
    pageNumber.push(
      <Button
        key={i}
        onClick={() => ChangePage(i)}
        size="xs"
        isActive={i === number}
      >
        {i}
      </Button>
    );
  }

  const Prev = () => {
    if (number !== 1) {
      setNumber(number - 1);
    } else {
      setNumber(number);
    }
  };

  const Next = () => {
    if (number < pageNumber.length) {
      setNumber(number + 1);
    } else {
      return null;
    }
  };

  return (
    <Container>
      <Center>
        {pageNumber.length > 0 && (
          <ButtonGroup colorScheme="blackAlpha" isAttached>
            <Button onClick={Prev} size="xs">
              {"<"}
            </Button>
            {pageNumber}
            <Button onClick={Next} size="xs">
              {">"}
            </Button>
          </ButtonGroup>
        )}
      </Center>
    </Container>
  );
}
