export interface PrerenderRoute {
  route: string;
  contents?: string;
  data?: ArrayBuffer;
  fileName?: string;
  error?: Error & { statusCode: number; statusMessage: string };
  generateTimeMS?: number;
  skip?: boolean;
  contentType?: string;
}

/** @deprecated Internal type will be removed in future versions */
export type PrerenderGenerateRoute = PrerenderRoute;
