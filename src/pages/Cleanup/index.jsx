import { useEffect, useState } from "react";

function Cleanup() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log("Gọi callback");
        return () => {
            console.log("Dọn");
        };
    }, [counter]);
    return (
        <div>
            <input type="file" />
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Counter is {counter}
            </button>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis voluptatibus iusto, praesentium inventore alias saepe
                fuga in at quidem dolore necessitatibus quae excepturi illo
                rerum. Sequi nisi excepturi natus? Nam, reiciendis quas nemo
                odio corrupti sed voluptate illum aliquam itaque natus sit sint
                iste voluptates perspiciatis aspernatur a eveniet nisi atque,
                quia, quo praesentium fuga vitae iusto saepe. Voluptas.
                Recusandae cum laborum voluptates reprehenderit iste,
                voluptatibus similique hic quas facere asperiores voluptatem? Ea
                ullam nemo, laudantium itaque totam voluptate esse, tenetur
                neque minima vitae dolore quidem deserunt, ex aperiam. Velit,
                ipsum optio voluptas ipsa laboriosam cupiditate adipisci
                consectetur ullam explicabo incidunt autem, aspernatur nisi
                atque officiis natus minima rerum nostrum numquam, aliquam fuga
                fugit neque pariatur quam? Aperiam, possimus!
            </p>{" "}
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis voluptatibus iusto, praesentium inventore alias saepe
                fuga in at quidem dolore necessitatibus quae excepturi illo
                rerum. Sequi nisi excepturi natus? Nam, reiciendis quas nemo
                odio corrupti sed voluptate illum aliquam itaque natus sit sint
                iste voluptates perspiciatis aspernatur a eveniet nisi atque,
                quia, quo praesentium fuga vitae iusto saepe. Voluptas.
                Recusandae cum laborum voluptates reprehenderit iste,
                voluptatibus similique hic quas facere asperiores voluptatem? Ea
                ullam nemo, laudantium itaque totam voluptate esse, tenetur
                neque minima vitae dolore quidem deserunt, ex aperiam. Velit,
                ipsum optio voluptas ipsa laboriosam cupiditate adipisci
                consectetur ullam explicabo incidunt autem, aspernatur nisi
                atque officiis natus minima rerum nostrum numquam, aliquam fuga
                fugit neque pariatur quam? Aperiam, possimus!
            </p>{" "}
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis voluptatibus iusto, praesentium inventore alias saepe
                fuga in at quidem dolore necessitatibus quae excepturi illo
                rerum. Sequi nisi excepturi natus? Nam, reiciendis quas nemo
                odio corrupti sed voluptate illum aliquam itaque natus sit sint
                iste voluptates perspiciatis aspernatur a eveniet nisi atque,
                quia, quo praesentium fuga vitae iusto saepe. Voluptas.
                Recusandae cum laborum voluptates reprehenderit iste,
                voluptatibus similique hic quas facere asperiores voluptatem? Ea
                ullam nemo, laudantium itaque totam voluptate esse, tenetur
                neque minima vitae dolore quidem deserunt, ex aperiam. Velit,
                ipsum optio voluptas ipsa laboriosam cupiditate adipisci
                consectetur ullam explicabo incidunt autem, aspernatur nisi
                atque officiis natus minima rerum nostrum numquam, aliquam fuga
                fugit neque pariatur quam? Aperiam, possimus!
            </p>{" "}
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis voluptatibus iusto, praesentium inventore alias saepe
                fuga in at quidem dolore necessitatibus quae excepturi illo
                rerum. Sequi nisi excepturi natus? Nam, reiciendis quas nemo
                odio corrupti sed voluptate illum aliquam itaque natus sit sint
                iste voluptates perspiciatis aspernatur a eveniet nisi atque,
                quia, quo praesentium fuga vitae iusto saepe. Voluptas.
                Recusandae cum laborum voluptates reprehenderit iste,
                voluptatibus similique hic quas facere asperiores voluptatem? Ea
                ullam nemo, laudantium itaque totam voluptate esse, tenetur
                neque minima vitae dolore quidem deserunt, ex aperiam. Velit,
                ipsum optio voluptas ipsa laboriosam cupiditate adipisci
                consectetur ullam explicabo incidunt autem, aspernatur nisi
                atque officiis natus minima rerum nostrum numquam, aliquam fuga
                fugit neque pariatur quam? Aperiam, possimus!
            </p>{" "}
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis voluptatibus iusto, praesentium inventore alias saepe
                fuga in at quidem dolore necessitatibus quae excepturi illo
                rerum. Sequi nisi excepturi natus? Nam, reiciendis quas nemo
                odio corrupti sed voluptate illum aliquam itaque natus sit sint
                iste voluptates perspiciatis aspernatur a eveniet nisi atque,
                quia, quo praesentium fuga vitae iusto saepe. Voluptas.
                Recusandae cum laborum voluptates reprehenderit iste,
                voluptatibus similique hic quas facere asperiores voluptatem? Ea
                ullam nemo, laudantium itaque totam voluptate esse, tenetur
                neque minima vitae dolore quidem deserunt, ex aperiam. Velit,
                ipsum optio voluptas ipsa laboriosam cupiditate adipisci
                consectetur ullam explicabo incidunt autem, aspernatur nisi
                atque officiis natus minima rerum nostrum numquam, aliquam fuga
                fugit neque pariatur quam? Aperiam, possimus!
            </p>{" "}
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis voluptatibus iusto, praesentium inventore alias saepe
                fuga in at quidem dolore necessitatibus quae excepturi illo
                rerum. Sequi nisi excepturi natus? Nam, reiciendis quas nemo
                odio corrupti sed voluptate illum aliquam itaque natus sit sint
                iste voluptates perspiciatis aspernatur a eveniet nisi atque,
                quia, quo praesentium fuga vitae iusto saepe. Voluptas.
                Recusandae cum laborum voluptates reprehenderit iste,
                voluptatibus similique hic quas facere asperiores voluptatem? Ea
                ullam nemo, laudantium itaque totam voluptate esse, tenetur
                neque minima vitae dolore quidem deserunt, ex aperiam. Velit,
                ipsum optio voluptas ipsa laboriosam cupiditate adipisci
                consectetur ullam explicabo incidunt autem, aspernatur nisi
                atque officiis natus minima rerum nostrum numquam, aliquam fuga
                fugit neque pariatur quam? Aperiam, possimus!
            </p>{" "}
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis voluptatibus iusto, praesentium inventore alias saepe
                fuga in at quidem dolore necessitatibus quae excepturi illo
                rerum. Sequi nisi excepturi natus? Nam, reiciendis quas nemo
                odio corrupti sed voluptate illum aliquam itaque natus sit sint
                iste voluptates perspiciatis aspernatur a eveniet nisi atque,
                quia, quo praesentium fuga vitae iusto saepe. Voluptas.
                Recusandae cum laborum voluptates reprehenderit iste,
                voluptatibus similique hic quas facere asperiores voluptatem? Ea
                ullam nemo, laudantium itaque totam voluptate esse, tenetur
                neque minima vitae dolore quidem deserunt, ex aperiam. Velit,
                ipsum optio voluptas ipsa laboriosam cupiditate adipisci
                consectetur ullam explicabo incidunt autem, aspernatur nisi
                atque officiis natus minima rerum nostrum numquam, aliquam fuga
                fugit neque pariatur quam? Aperiam, possimus!
            </p>{" "}
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis voluptatibus iusto, praesentium inventore alias saepe
                fuga in at quidem dolore necessitatibus quae excepturi illo
                rerum. Sequi nisi excepturi natus? Nam, reiciendis quas nemo
                odio corrupti sed voluptate illum aliquam itaque natus sit sint
                iste voluptates perspiciatis aspernatur a eveniet nisi atque,
                quia, quo praesentium fuga vitae iusto saepe. Voluptas.
                Recusandae cum laborum voluptates reprehenderit iste,
                voluptatibus similique hic quas facere asperiores voluptatem? Ea
                ullam nemo, laudantium itaque totam voluptate esse, tenetur
                neque minima vitae dolore quidem deserunt, ex aperiam. Velit,
                ipsum optio voluptas ipsa laboriosam cupiditate adipisci
                consectetur ullam explicabo incidunt autem, aspernatur nisi
                atque officiis natus minima rerum nostrum numquam, aliquam fuga
                fugit neque pariatur quam? Aperiam, possimus!
            </p>{" "}
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis voluptatibus iusto, praesentium inventore alias saepe
                fuga in at quidem dolore necessitatibus quae excepturi illo
                rerum. Sequi nisi excepturi natus? Nam, reiciendis quas nemo
                odio corrupti sed voluptate illum aliquam itaque natus sit sint
                iste voluptates perspiciatis aspernatur a eveniet nisi atque,
                quia, quo praesentium fuga vitae iusto saepe. Voluptas.
                Recusandae cum laborum voluptates reprehenderit iste,
                voluptatibus similique hic quas facere asperiores voluptatem? Ea
                ullam nemo, laudantium itaque totam voluptate esse, tenetur
                neque minima vitae dolore quidem deserunt, ex aperiam. Velit,
                ipsum optio voluptas ipsa laboriosam cupiditate adipisci
                consectetur ullam explicabo incidunt autem, aspernatur nisi
                atque officiis natus minima rerum nostrum numquam, aliquam fuga
                fugit neque pariatur quam? Aperiam, possimus!
            </p>{" "}
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                debitis voluptatibus iusto, praesentium inventore alias saepe
                fuga in at quidem dolore necessitatibus quae excepturi illo
                rerum. Sequi nisi excepturi natus? Nam, reiciendis quas nemo
                odio corrupti sed voluptate illum aliquam itaque natus sit sint
                iste voluptates perspiciatis aspernatur a eveniet nisi atque,
                quia, quo praesentium fuga vitae iusto saepe. Voluptas.
                Recusandae cum laborum voluptates reprehenderit iste,
                voluptatibus similique hic quas facere asperiores voluptatem? Ea
                ullam nemo, laudantium itaque totam voluptate esse, tenetur
                neque minima vitae dolore quidem deserunt, ex aperiam. Velit,
                ipsum optio voluptas ipsa laboriosam cupiditate adipisci
                consectetur ullam explicabo incidunt autem, aspernatur nisi
                atque officiis natus minima rerum nostrum numquam, aliquam fuga
                fugit neque pariatur quam? Aperiam, possimus!
            </p>{" "}
            <br />
        </div>
    );
}
export default Cleanup;
