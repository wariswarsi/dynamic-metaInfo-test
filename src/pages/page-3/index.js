import React from "react";
import useMeta from "../../hooks/useMeta";
import { useTranslation } from "react-i18next";

export default function Contactus() {
  const { t } = useTranslation();

  const title = `contact page title`;
  const description = `contact page description`;

  useMeta(title, description);
  return (
    <div>
      <h1>{t("banner.title")}</h1>
      <p>{t("banner.description")}</p>
    </div>
  );
}
