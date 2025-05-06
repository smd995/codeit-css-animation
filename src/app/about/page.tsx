import PageTransition from "@/components/page-transition";
import Link from "next/link";

export default function About() {
  return (
    <PageTransition>
      <div>
        <h1>About 페이지</h1>
      </div>
      <Link href={"/"} className="text-blue-500 underline">
        홈으로
      </Link>
    </PageTransition>
  );
}
