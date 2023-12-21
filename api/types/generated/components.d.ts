import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentAboutUs extends Schema.Component {
  collectionName: 'components_component_about_uses';
  info: {
    displayName: 'About_us';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface ComponentBookNow extends Schema.Component {
  collectionName: 'components_component_book_nows';
  info: {
    displayName: 'Book_now';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    book_in_a_call_link: Attribute.String;
  };
}

export interface ComponentBorderedText extends Schema.Component {
  collectionName: 'components_component_bordered_texts';
  info: {
    displayName: 'borderedText';
    icon: 'alien';
    description: '';
  };
  attributes: {
    section_title: Attribute.String;
    item: Attribute.Component<'component.text-image-item', true>;
  };
}

export interface ComponentCircleItem extends Schema.Component {
  collectionName: 'components_component_circle_items';
  info: {
    displayName: 'circle_item';
    icon: 'cloud';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface ComponentColumnImage extends Schema.Component {
  collectionName: 'components_component_column_images';
  info: {
    displayName: 'ColumnImage';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentCtaCenter extends Schema.Component {
  collectionName: 'components_component_cta_centers';
  info: {
    displayName: 'cta_center';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cta_text: Attribute.String;
    cta_link: Attribute.String;
  };
}

export interface ComponentFeatureItem extends Schema.Component {
  collectionName: 'components_component_feature_items';
  info: {
    displayName: 'feature_item';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentFeatures extends Schema.Component {
  collectionName: 'components_component_features';
  info: {
    displayName: 'features';
    icon: 'alien';
  };
  attributes: {
    item: Attribute.Component<'component.feature-item', true>;
  };
}

export interface ComponentFourColumnGrid extends Schema.Component {
  collectionName: 'components_component_four_column_grids';
  info: {
    displayName: 'four_column_grid';
    icon: 'apps';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'component.grid-item', true>;
    quietness: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }>;
  };
}

export interface ComponentGridItem extends Schema.Component {
  collectionName: 'components_component_grid_items';
  info: {
    displayName: 'grid_item';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    tag: Attribute.Component<'component.tags', true>;
  };
}

export interface ComponentHeaderWithGridImage extends Schema.Component {
  collectionName: 'components_component_header_with_grid_images';
  info: {
    displayName: 'header_with_grid_image';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    location: Attribute.Text;
    item: Attribute.Component<'component.image-list', true> &
      Attribute.Required;
  };
}

export interface ComponentHeroCenter extends Schema.Component {
  collectionName: 'components_component_hero_centers';
  info: {
    displayName: 'hero_center';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    cta_text: Attribute.String;
    cta_link: Attribute.String;
  };
}

export interface ComponentHeroWithBackground extends Schema.Component {
  collectionName: 'components_component_hero_with_backgrounds';
  info: {
    displayName: 'hero_with_background';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    cta_text: Attribute.String;
    cta_link: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentHero extends Schema.Component {
  collectionName: 'components_component_heroes';
  info: {
    displayName: 'hero';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
    cta_text: Attribute.String;
    cta_link: Attribute.String;
    section_title: Attribute.String;
  };
}

export interface ComponentImageList extends Schema.Component {
  collectionName: 'components_component_image_lists';
  info: {
    displayName: 'image_list';
    icon: 'apps';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentListItem extends Schema.Component {
  collectionName: 'components_component_list_items';
  info: {
    displayName: 'list_item';
    icon: 'apps';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentListVersion extends Schema.Component {
  collectionName: 'components_component_list_versions';
  info: {
    displayName: 'List_version';
    icon: 'arrowDown';
  };
  attributes: {
    version_number: Attribute.String;
    isCurrent: Attribute.Boolean;
    item: Attribute.Component<'component.version-description', true>;
  };
}

export interface ComponentPartnerListItem extends Schema.Component {
  collectionName: 'components_component_partner_list_items';
  info: {
    displayName: 'partner_list_item';
    icon: 'alien';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentPartners extends Schema.Component {
  collectionName: 'components_component_partners';
  info: {
    displayName: 'partners';
    icon: 'alien';
  };
  attributes: {
    item: Attribute.Component<'component.partner-list-item', true>;
    title: Attribute.String;
  };
}

export interface ComponentSingleRowWithImage extends Schema.Component {
  collectionName: 'components_component_single_row_with_images';
  info: {
    displayName: 'SingleRowWithImage';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentSpotFinder extends Schema.Component {
  collectionName: 'components_component_spot_finders';
  info: {
    displayName: 'spot_finder';
    icon: 'apps';
  };
  attributes: {
    study_spots: Attribute.Relation<
      'component.spot-finder',
      'oneToMany',
      'api::study-spot.study-spot'
    >;
  };
}

export interface ComponentTags extends Schema.Component {
  collectionName: 'components_component_tags';
  info: {
    displayName: 'tags';
    icon: 'apps';
  };
  attributes: {
    tag: Attribute.String;
  };
}

export interface ComponentTextColumn extends Schema.Component {
  collectionName: 'components_component_text_columns';
  info: {
    displayName: 'text_column';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface ComponentTextImageItem extends Schema.Component {
  collectionName: 'components_component_text_image_items';
  info: {
    displayName: 'text_image_item';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface ComponentThreeGridCircle extends Schema.Component {
  collectionName: 'components_component_three_grid_circles';
  info: {
    displayName: 'ThreeGridCircle';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    item: Attribute.Component<'component.circle-item', true>;
  };
}

export interface ComponentTwoColumnCtaBorder extends Schema.Component {
  collectionName: 'components_component_two_column_cta_borders';
  info: {
    displayName: 'two_column_cta_border';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    libraries: Attribute.Relation<
      'component.two-column-cta-border',
      'oneToMany',
      'api::library.library'
    >;
  };
}

export interface ComponentTwoColumnCtaImageLeft extends Schema.Component {
  collectionName: 'components_component_two_column_cta_image_lefts';
  info: {
    displayName: 'TwoColumnCtaImageLeft';
    icon: 'alien';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String;
    description: Attribute.RichText;
    cta_link: Attribute.String;
    cta_text: Attribute.String;
  };
}

export interface ComponentTwoColumnCtaList extends Schema.Component {
  collectionName: 'components_component_two_column_cta_lists';
  info: {
    displayName: 'TwoColumnCtaList';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cta_text: Attribute.String;
    cta_link: Attribute.String;
    libraries: Attribute.Relation<
      'component.two-column-cta-list',
      'oneToMany',
      'api::library.library'
    >;
  };
}

export interface ComponentTwoColumnImageLeft extends Schema.Component {
  collectionName: 'components_component_two_column_image_lefts';
  info: {
    displayName: 'twoColumnImageLeft';
    icon: 'alien';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'component.column-image', true>;
  };
}

export interface ComponentTwoColumnText extends Schema.Component {
  collectionName: 'components_component_two_column_texts';
  info: {
    displayName: 'twoColumnText';
    icon: 'alien';
  };
  attributes: {
    item: Attribute.Component<'component.text-column', true>;
  };
}

export interface ComponentVersionDescription extends Schema.Component {
  collectionName: 'components_component_version_descriptions';
  info: {
    displayName: 'version_description';
    icon: 'alien';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface ComponentVersions extends Schema.Component {
  collectionName: 'components_component_versions';
  info: {
    displayName: 'versions';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    version: Attribute.Component<'component.list-version', true>;
  };
}

export interface ComponentVideoItem extends Schema.Component {
  collectionName: 'components_component_video_items';
  info: {
    displayName: 'video_item';
    icon: 'bell';
  };
  attributes: {
    video_link: Attribute.String;
    thumnail_video: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentVideos extends Schema.Component {
  collectionName: 'components_component_videos';
  info: {
    displayName: 'Videos';
    icon: 'apps';
  };
  attributes: {
    item: Attribute.Component<'component.video-item', true>;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    keywords: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.about-us': ComponentAboutUs;
      'component.book-now': ComponentBookNow;
      'component.bordered-text': ComponentBorderedText;
      'component.circle-item': ComponentCircleItem;
      'component.column-image': ComponentColumnImage;
      'component.cta-center': ComponentCtaCenter;
      'component.feature-item': ComponentFeatureItem;
      'component.features': ComponentFeatures;
      'component.four-column-grid': ComponentFourColumnGrid;
      'component.grid-item': ComponentGridItem;
      'component.header-with-grid-image': ComponentHeaderWithGridImage;
      'component.hero-center': ComponentHeroCenter;
      'component.hero-with-background': ComponentHeroWithBackground;
      'component.hero': ComponentHero;
      'component.image-list': ComponentImageList;
      'component.list-item': ComponentListItem;
      'component.list-version': ComponentListVersion;
      'component.partner-list-item': ComponentPartnerListItem;
      'component.partners': ComponentPartners;
      'component.single-row-with-image': ComponentSingleRowWithImage;
      'component.spot-finder': ComponentSpotFinder;
      'component.tags': ComponentTags;
      'component.text-column': ComponentTextColumn;
      'component.text-image-item': ComponentTextImageItem;
      'component.three-grid-circle': ComponentThreeGridCircle;
      'component.two-column-cta-border': ComponentTwoColumnCtaBorder;
      'component.two-column-cta-image-left': ComponentTwoColumnCtaImageLeft;
      'component.two-column-cta-list': ComponentTwoColumnCtaList;
      'component.two-column-image-left': ComponentTwoColumnImageLeft;
      'component.two-column-text': ComponentTwoColumnText;
      'component.version-description': ComponentVersionDescription;
      'component.versions': ComponentVersions;
      'component.video-item': ComponentVideoItem;
      'component.videos': ComponentVideos;
      'seo.seo': SeoSeo;
    }
  }
}
