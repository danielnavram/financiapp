import React from "react";
import { Layout } from "components/Layout";
import { LoginForm } from "components/Form/login/LoginForm";
import { Card } from "components/Common";
import { Link } from "react-router-dom";

export default function LoginPage() {
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
            <LoginForm />
          </div>
        </Card>
      </section>
    </Layout>
  );
}
