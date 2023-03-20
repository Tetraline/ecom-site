import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import getData from "@/lib/dataReadUtility";
import Card from "@/components/Card/Card";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const productData = getData();
  return {
    props: {
      productData,
    },
  };
}

export default function Home({ productData }) {
  const [basket, setBasket] = useState({});
  const [showBasket, setShowBasket] = useState(false);
  const handleBasketChange = (id, newQuantity) => {
    console.log(newQuantity);
    setBasket({ ...basket, [id]: newQuantity });
    // https://react.dev/learn/updating-objects-in-state
  };
  const productsJSX = productData.map((product) => {
    return (
      <Card
        key={product.id}
        product={product}
        handleBasketChange={handleBasketChange}
      />
    );
  });
  const basketJSX = Object.keys(basket).map((key) => {
    return (
      <p key={key}>
        {key}: {basket[key]}
      </p>
    );
  });
  return (
    <>
      <Head>
        <title>Fast Food</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {basketJSX}
      <NavBar
        handleBasketToggle={() => {
          setShowBasket(!showBasket);
        }}
      />
      {productsJSX}
    </>
  );
}
