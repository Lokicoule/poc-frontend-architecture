import { featuresRoutesConfig } from "../configs/routes.config";
import {
  relativePath,
  absolutePath,
  relativeViewPath,
  absoluteCreatePath,
  relativeUpdatePath,
} from "./routes.helper";

export abstract class NavigationHelper {
  private _root;
  private _referential;

  constructor(feature: string) {
    this._root = relativePath([feature]);
    this._referential = relativePath([
      this._root,
      featuresRoutesConfig.referentialPath,
    ]);
  }

  root() {
    return absolutePath([this._root]);
  }

  rootReferential() {
    return absolutePath([this._referential]);
  }

  view(id: string, optionalPaths?: string[]) {
    const path = optionalPaths
      ? relativeViewPath([this._root, ...optionalPaths])
      : relativeViewPath([this._root]);
    return absolutePath([path, id]);
  }

  create() {
    return absoluteCreatePath([this._root]);
  }

  update(id: string) {
    const path = relativeUpdatePath([this._root]);
    return absolutePath([path, id]);
  }

  updateReferential(id: string) {
    const path = relativeUpdatePath([this._referential]);
    return absolutePath([path, id]);
  }
}
