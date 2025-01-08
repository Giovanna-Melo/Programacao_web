"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []); //Receita 2a

    return (
        <div>
            <h1>Viva Santana!</h1>
            <Link href="/novarota">Rota 1</Link> <br /><br />
            {isClient && <a href="/novarota">Rota 1, jeito antigo</a>}
        </div>
    );
}

export function Ex_two (){
    return (
        <div> 
            <p>
            Eis uma função não default
            </p>
        </div>
    )
}