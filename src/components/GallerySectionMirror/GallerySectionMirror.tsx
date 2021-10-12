import type { FC } from "react";

import { GalleryEditItem } from "@/components/GalleryEditItem";
import { GalleryItem } from "@/components/GalleryItem";
import { GallerySection } from "@/components/GallerySection";
import { useMirrorArticles } from "@/hooks/useMirrorArticles";

export type GallerySectionMirrorProps = {
  editable?: boolean;
};

export const GallerySectionMirror: FC<GallerySectionMirrorProps> = ({
  editable = false,
}) => {
  const { mirrorArticles } = useMirrorArticles();

  return (
    <GallerySection>
      {mirrorArticles &&
        mirrorArticles.map((article, index) => {
          if (editable) {
            return (
              <GalleryEditItem
                key={index}
                type="mirror"
                value={article?.title}
                src={article?.cover_image}
              />
            );
          }
          return (
            <GalleryItem key={index} type="mirror" src={article?.cover_image} />
          );
        })}
    </GallerySection>
  );
};
