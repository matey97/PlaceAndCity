import { InformationDialogData } from "../../../../common/dialogs/information-dialog/information-dialog.component";

export type Facet = string;

export interface FacetsCluster {
  name: Facet;
  includedFacets?: FacetsCluster[];
  information?: InformationDialogData;
}

export const facetsClusters: FacetsCluster[] = [
  {
    name: "Cluster Nº1",
    includedFacets: [
      {
        name: "Facet Nº1"
      },
      {
        name: "Facet Nº2"
      }
    ],
    information: {
      title: "Cluster Nº1 information",
      content: "Blah blah blah"
    }
  },
  {
    name: "Cluster Nº2",
    includedFacets: [
      {
        name: "Facet Nº3"
      },
      {
        name: "Facet Nº4",
        information: {
          title: "Facet Nº4 information",
          content: "Bleh bleh bleh"
        }
      },
      {
        name: "Facet Nº5"
      }
    ],
    information: {
      title: "Cluster Nº2 information",
      content: "Blah blah blah"
    }
  },
  {
    name: "Cluster Nº3",
    includedFacets: [
      {
        name: "Facet Nº6"
      }
    ],
    information: {
      title: "Cluster Nº3 information",
      content: "Blah blah blah"
    }
  }
];
