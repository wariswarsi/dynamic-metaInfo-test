import React from "react";
import useMeta from "../../hooks/useMeta";
import { useTranslation } from "react-i18next";

export default function Homepage() {
  const { t } = useTranslation();

  const title = `home page title`;
  const description = `home page description`;
  const keywords = `keyword, keyword`;

  useMeta(title, description, keywords);

  return (
    <div>
      <h1>{t("banner.title")}</h1>
      <p>{t("banner.description")}</p>
    </div>
  );
}
