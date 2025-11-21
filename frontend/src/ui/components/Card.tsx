type CardProps = {
  titulo: string;
  imagen: string; 
};

export default function Card({ titulo, imagen }: CardProps) {
  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-sm flex flex-col items-center text-center">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        {titulo}
      </h3>

      <img
        src={imagen}
        alt={titulo}
        className="w-full max-w-[220px] rounded-lg object-cover shadow-md"
      />
    </div>
  );
}
