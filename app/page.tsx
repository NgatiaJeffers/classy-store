import getBillboard from "@/actions/get-billboards";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";



const HomePage = async () => {
  const billboard = await getBillboard("6554cde8dab85d0b80592b2d");

  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
        </div>
      </Container>
    </div>
  )
}

export default HomePage;
