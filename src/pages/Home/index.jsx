import { useState } from "react";
import Model from "../../components/Modal";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <h1>Trang Home nè</h1>
            <button onClick={() => setIsOpen(true)}>Open Model</button>
            <button onClick={() => setIsOpen(false)}>Close Model</button>
            {isOpen && (
                <Model
                    closeTimeoutMS
                    onRequestClose={() => setIsOpen(false)}
                    isOpen={isOpen}
                    bodyOpenClassName="modal-custom-body"
                    // shouldCloseOnEsc={false}
                >
                    <h2>Register</h2>
                    <form action="">
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                    </form>
                </Model>
            )}
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
            <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                neque ducimus ullam expedita repudiandae in facilis harum
                eligendi accusamus ipsam? Impedit distinctio accusamus expedita
                cumque aut dolore est vero illo! Eius ipsam eum nihil autem
                expedita vitae officia quis, ad culpa repellendus. At facilis
                pariatur veritatis, architecto doloribus debitis inventore in
                delectus voluptate, similique dolore maxime? Ut quos nihil
                repudiandae. Explicabo aliquam, exercitationem possimus nisi sit
                in harum iusto quidem voluptas voluptates id libero totam ipsum
                vero incidunt. Mollitia quam id eligendi reprehenderit deleniti
                aut nam accusantium. Sequi, repellat vel!
            </p>{" "}
            <br />
        </div>
    );
}

export default Home;
