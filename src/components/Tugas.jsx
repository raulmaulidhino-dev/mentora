const Tugas = ({index, subject, title, dateCreated}) => {
    return (
        <section className="p-2 shadow-lg rounded-xl flex gap-3">
            <section className="text-white text-4xl bg-primary px-4 py-2 rounded-xl flex justify-center items-center w-14">{index}</section>
            <section>
                <h2 className="text-lg font-semibold mb-[0.5em]"><span className="text-blue-700">{subject}</span> | {title}</h2>
                <p>{dateCreated}</p>
            </section>
        </section>
    )
}

export default Tugas;