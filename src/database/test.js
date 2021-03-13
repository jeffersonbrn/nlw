const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela 
    /*
     await saveOrphanage(db, {
        lat: "-5.818116",
        lng: "-35.2181287",
        name: "Lar das velhos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "84996333672",
        images: [
            "https://images.unsplash.com/photo-1597095536985-21c85eb8c65e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1603138461788-8090d5c00bf7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 08h às 18hs",
        open_on_weekends: "1"
     })

      

    // consultar dados da tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
*/
    // consultar somente 1 orphanato, pelo id

    const orphanage = await db.all('SELECT * FROM orphanages')
    console.log(orphanage)

    // deletar dado da tabela
    /*
    console.log("DELETE FROM orphanage WHERE id = '4'")
    console.log("DELETE FROM orphanage WHERE id = '5'")
    console.log("DELETE FROM orphanage WHERE id = '3'") */
})