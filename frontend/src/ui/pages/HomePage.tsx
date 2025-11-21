import { useEffect, useState } from "react";
import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";
import { HttpServiceRepository } from "../../infrastructure/httpServiceRepository";
import { GetServices } from "../../application/getServices";

type Service = {
  titulo: string;
  imagen: string;
};

export default function HomePage() {
  const [data, setData] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repo = new HttpServiceRepository();
    const getServices = new GetServices(repo);

    const loadData = async () => {
      try {
        const services = await getServices.getAll();
        setData(services);
      } catch (e) {
        console.error({e});
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <section
        className="relative w-full h-[45vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, #E7E7E7, #FFFFFF)",
        }}
      >
        <div className="bg-black/30 backdrop-blur-sm px-8 py-6 rounded-xl">
          <h1 className="text-white text-5xl font-extrabold tracking-wide uppercase text-center">
            Ministerio Público
          </h1>
          <p className="text-white/90 text-lg mt-2 tracking-widest uppercase">
            Transparencia • Servicio • Confianza • Competencia Profesional
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-700 tracking-tight">
          ¿Qué es el Ministerio Público?
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed">
          El Ministerio Público es una institución con funciones autónomas,
          promueve la persecución penal y dirige la investigación de los delitos
          de acción pública; además velar por el estricto cumplimiento de las
          leyes del país. En el ejercicio de esa función, el Ministerio Público
          perseguirá la realización de la justicia, y actuará con objetividad,
          imparcialidad y con apego al principio de legalidad, en los términos
          que la ley establece.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-lg border border-blue-100/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 tracking-wide">
              Misión
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Somos una institución con funciones autónomas, que promueve la
              persecución penal, dirige e investiga los delitos de acción
              pública, actuando y velando por el estricto cumplimiento de las
              leyes, con responsabilidad, ética, objetividad e imparcialidad, a
              fin de coadyuvar a la aplicación de una justicia pronta y
              cumplida.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-lg border border-blue-100/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 tracking-wide">
              Visión
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ser una institución con altos estándares de calidad continua en la
              gestión de casos, con equidad de género, pertinencia étnica y
              etaria, alto grado de sensibilidad humana y enfoque victimológico,
              consolidando la justicia pronta y cumplida, en el combate directo
              contra la delincuencia, la corrupción e impunidad.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-20 ">Servicios</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {loading || data.length === 0 ? (
            // Skeletons
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            data.map((item, idx) => (
              <Card key={idx} titulo={item.titulo} imagen={item.imagen} />
            ))
          )}
        </div>
      </section>
    </>
  );
}
