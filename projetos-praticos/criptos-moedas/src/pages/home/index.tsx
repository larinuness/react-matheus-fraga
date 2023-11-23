import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { BsSearchHeart } from "react-icons/bs";
import { useEffect } from "react";

// https://sujeitoprogramador.com/api-cripto/?key=67f9141787211428

export function Home() {
  useEffect(() => {
    function getData() {
      fetch(
        "https://sujeitoprogramador.com/api-cripto/?key=67f9141787211428&pref=BRL"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }

    getData();
  }, []);
  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Digite o símbolo da moeda" />
        <button type="submit">
          <BsSearchHeart size={30} color="white" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>

        <tbody id="tbody">
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-label="Moeda">
              <Link className={styles.link} to={"/detail/btc"}>
                <span>BitCoin</span> | BTC
              </Link>
            </td>
            <td className={styles.tdLabel} data-label="Mercado">
              R$ 1903,9
            </td>
            <td className={styles.tdLabel} data-label="Preço">
              R$ 40,9
            </td>
            <td className={styles.tdProfit} data-label="Volume">
              <span>-5.3</span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
