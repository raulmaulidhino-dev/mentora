import Sains from '../assets/sains.png'
import Matematika from '../assets/matematika.png'
import Bahasa from '../assets/bahasa.png'
import AgamaIslam from '../assets/agama-islam.png'
import Sejarah from '../assets/sejarah.png'
import Olahraga from '../assets/olahraga.png'
import PPKN from '../assets/ppkn.png'

const Tugas = ({ cover, subject="sains", title, studentClass, teacherName, year}) => {
    if (cover == null) {
        switch (subject.toLowerCase()) {
            case 'sains': cover = Sains; break;
            case 'matematika': cover = Matematika; break;
            case 'bahasa': cover = Bahasa; break;
            case 'agama-islam': cover = AgamaIslam; break;
            case 'sejarah': cover = Sejarah; break;
            case 'olahraga': cover = Olahraga; break;
            case 'ppkn': cover = PPKN; break;
            default: cover = Sains; break;
        }
    }

    return (
        <section className="border-2 shadow-xl rounded-xl">
            <a href="/">
                <img src={cover} alt="Cover Tugas" className="w-full rounded-t-[10px]" />
                <section className="p-3">
                    <h2 className="font-bold text-blue-700 mb-2">{title} - {studentClass} - {teacherName}</h2>
                    <p>{year}</p>
                </section>
            </a>
        </section>
    )
}

export default Tugas;