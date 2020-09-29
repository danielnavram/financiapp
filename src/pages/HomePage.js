import React from "react";

import Card from "../components/Card/Card";

export default function HomePage() {
  return (
    <Card title="Bienvenido!">
      <p>
        Recuerda registrarte o iniciar sesión para gestionar tus finanzas y que
        puedas tener un seguimiento completo
      </p>
      <p>
        Da click en el menu para que puedas acceder facilmente a tu usuario.
      </p>
    </Card>
  );
}
