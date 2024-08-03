import { Button, ButtonGroup, Container, Center } from "@chakra-ui/react";

export default function Paginate({
  number,
  setNumber,
  tableData,
  postPerPage,
}: any) {
  const ChangePage = (pageNumber: number) => {
    setNumber(pageNumber);
  };

  const pageNumber: JSX.Element[] = [];

  // getting page numbers dynamically
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
      //to restrict going lower than page 1
      setNumber(number - 1);
    } else {
      setNumber(number);
    }
  };

  const Next = () => {
    if (number < pageNumber.length) {
      //to restrict going above page 3 as it the last page of the app
      setNumber(number + 1);
    } else {
      return null;
    }
  };

  return (
    <Container>
      <Center>
        {/* <Pagination>
          <Pagination.Prev onClick={Prev} />
          {pageNumber}
          <Pagination.Next onClick={Next} />
        </Pagination> */}
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
