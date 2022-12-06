import Link from "next/link";


export default function FAQ() {
    return (
        <div>
            <h1>
                FAQ
            </h1>
            <p>Hola, probando next
                <Link legacyBehavior href="/">
                    <a>
                        Volvemos al Home
                    </a>
                </Link>
            </p>
        </div>
    );
}

//si yo pongo localhost:3000/faq ya me redirige automaticamente a este componente