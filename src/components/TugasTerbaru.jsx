const TugasTerbaru = ({index, subject, title, dateCreated}) => {
    return (
        <section className="p-2 shadow-lg rounded-xl flex gap-3">
            <section className="text-white text-4xl bg-primary px-4 py-2 rounded-xl flex justify-center items-center">{index}</section>
            <section>
                <h2 className="text-lg text-blue-700 font-semibold mb-[0.5em]">{subject} | {title}</h2>
                <p>{dateCreated}</p>
            </section>
        </section>
    )
}

export default TugasTerbaru;