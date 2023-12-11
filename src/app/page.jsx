import Insees from "../../assets/Insees.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={Insees} />
      <div className="flex gap-2"></div>
      <Image src={Insees} />
      <Image src={Insees} />
      <Image src={Insees} />
      <Image src={Insees} />
      <Image src={Insees} />
      <Image src={Insees} />
      <Image src={Insees} />
    </main>
  );
}
