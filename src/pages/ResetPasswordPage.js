import React from "react";
import { Layout } from "components/Layout";
import { Card } from "components/Common";
import { Link } from "react-router-dom";
import { ResetPasswordForm } from "components/Form/login/ResetPasswordForm";

export default function ResetPasswordPage() {
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
            <p className="main__description">
              If you lost your password, write down your email and check it out
              to recover your account. Remember if you don't receive any email,
              please contact the support
            </p>
            <ResetPasswordForm />
          </div>
        </Card>
      </section>
    </Layout>
  );
}
