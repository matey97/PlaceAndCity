import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree";
import { DialogService } from "../../../../services/dialogs/dialog.service";
import { InformationDialogData } from "../../../../common/dialogs/information-dialog/information-dialog.component";
import { Facet, FacetsCluster } from "../questions/facets-clusters";
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
  selector: 'app-facets-selection',
  templateUrl: './facets-selection.component.html',
  styleUrls: ['./facets-selection.component.scss'],

})
export class FacetsSelectionComponent implements OnInit {

  @Input() facetsForm!: FormGroup
  @Input() facetsClusters: FacetsCluster[] = [];

  private _transformer = (node: FacetsCluster, level: number): FacetNode => {
    return {
      expandable: !!node.includedFacets && node.includedFacets.length > 0,
      name: node.name,
      level: level,
      information: node.information,
    };
  };

  treeControl = new FlatTreeControl<FacetNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.includedFacets
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
    this.dataSource.data = this.facetsClusters;
  }

  hasChild = (_: number, node: FacetNode) => node.expandable;

  shownInformation(information: InformationDialogData) {
    this.dialogService.showInformationDialog(information);
  }
}

interface FacetNode {
  expandable: boolean;
  name: Facet;
  level: number;
  information?: InformationDialogData;
}
