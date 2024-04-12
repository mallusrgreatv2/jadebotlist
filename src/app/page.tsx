import { TypographyH1, TypographyH2 } from "@/components/typography";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import homePageConfig from "../configs/home-page.json" assert { type: "json" };

export default function Home() {
  return (
    <main>
      <div className="w-full bg-green-600 p-1 select-none">
        <Link href="/" className="flex flex-row justify-center items-center">
          <Image
            src="/jade.png"
            alt="Jade Logo"
            width={70}
            height={70}
            className="rounded-full m-3"
          />
          <TypographyH2 className="text-center my-9">JadeList</TypographyH2>
        </Link>
      </div>
      <div className="flex flex-col justify-center mt-10 lg:m-10 text-center">
        <TypographyH1 className="text-2xl lg:text-3xl">
          Find the{" "}
          <span className="text-green-600">
            {homePageConfig.finds[
              Math.floor(Math.random() * homePageConfig.finds.length)
            ] || "the best bot for your server"}
          </span>
        </TypographyH1>
        <div className="relative mt-10">
          <SearchIcon
            className="absolute z-10 top-4 left-[28.55rem]"
            size={23}
          />
          <div>
            <input
              type="search"
              name="Search Bots"
              id="search"
              placeholder="Search for a bot"
              className="bg-green-600 placeholder:text-white w-[30%] py-4 pl-12 pr-4 text-[1.06rem] rounded-3xl focus:bg-green-500 transition-colors text-search-text outline-none overflow-auto shadow-lg select-none relative"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center items-center py-10">
        <TypographyH2>Today's bots</TypographyH2>
        <div className="grid lg:grid-cols-3 grid-cols-1 pl-0">
          <BotCard
            botImage="/jade.png"
            botName="Test"
            botDescription="test 1234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
          />
          <BotCard
            botImage="/jade.png"
            botName="Test"
            botDescription="test 1234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
          />
          <BotCard
            botImage="/jade.png"
            botName="Test"
            botDescription="test 1234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
          />
          <BotCard
            botImage="/jade.png"
            botName="Test"
            botDescription="test 1234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
          />
          <BotCard
            botImage="/jade.png"
            botName="Test"
            botDescription="test 1234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
          />
          <BotCard
            botImage="/jade.png"
            botName="Test"
            botDescription="test 1234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
          />
          <BotCard
            botImage="/jade.png"
            botName="Test"
            botDescription="test 1234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
          />
          <BotCard
            botImage="/jade.png"
            botName="Test"
            botDescription="test 1234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
          />
          <BotCard
            botImage="/jade.png"
            botName="Test"
            botDescription="test 1234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
          />
          <BotCard
            botImage="/jade.png"
            botName="Test"
            botDescription="test 1234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
          />
        </div>
      </div>
    </main>
  );
}
function BotCard({
  botImage,
  botName,
  botDescription,
}: {
  botImage: string;
  botName: string;
  botDescription: string;
}) {
  const sliced = botDescription.slice(0, 25);
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 bg-green-500 hover:bg-green-600 transition-colors py-5 rounded-3xl m-6">
      <Image
        src={botImage}
        alt={`${botName}'s icon`}
        width={120}
        height={120}
        className="rounded-full mt-2 mb-5"
      />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {botName}
      </h3>
      <p className="text-muted text-lg">
        {botDescription === sliced ? sliced : `${sliced}...`}
      </p>
    </div>
  );
}
