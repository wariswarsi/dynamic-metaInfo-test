import React from "react";
import useMeta from "../../hooks/useMeta";
import { useTranslation } from "react-i18next";

export default function Aboutpage() {
  const { t } = useTranslation();

  const title = `about page title`;
  const description = `about page description`;

  useMeta(title, description);
  
  return (
    <div>
      <h1>{t("banner.title")}</h1>
      <p>{t("banner.description")}</p>
    </div>
  );
}
