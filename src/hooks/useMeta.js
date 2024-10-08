// src/hooks/useMeta.js
import { useEffect } from "react";

const useMeta = (title, description, keywords) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const metaKeywords= document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Cleanup: Reset to default when the component unmounts
    return () => {
      document.title = "Default Title";
      if (metaDescription) {
        metaDescription.setAttribute("content", "Default description");
      }
      if (metaKeywords) {
        metaKeywords.setAttribute("content", "Default keywords");
      }
    };
  }, [title, description, keywords]);
};

export default useMeta;
