export default function ServicePage() {
  return (
    <>
      <section
        className="relative w-full h-[20vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, #E7E7E7, #FFFFFF)",
        }}
      >
        <h2 className="text-3xl font-bold text-center  ">Servicios</h2>
      </section>
      <section className="py-20 px-6 bg-white  ">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Gestión Presupuestaria
            </h3>
            <p className="text-gray-700">
              Planificación, control y ejecución del presupuesto general del
              Estado.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Recaudación Fiscal</h3>
            <p className="text-gray-700">
              Supervisión de la recaudación de impuestos y contribuciones.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Transparencia Financiera
            </h3>
            <p className="text-gray-700">
              Publicación de auditorías e informes financieros para
              transparencia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
