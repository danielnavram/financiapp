import React from "react";
import {Layout} from "components/Layout";
import { RegisterForm } from "components/Form/register/RegisterForm";
import { Card } from "components/Common";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <Layout>
      <section className="main">
        <Card>
          <div className="main__content">
            <Link className="main__logo" to="/">
              <img
                className="main__image"
                src="assets/images/financiapp.svg"
                alt="Financiapp Logo"
              />
            </Link>
            <RegisterForm />
          </div>
        </Card>
      </section>
    </Layout>
  );
}
