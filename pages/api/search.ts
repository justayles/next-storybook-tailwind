import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../lib/search/database.json';
import { ISearchData } from '../../lib/search/types';

interface IApiSearchRequest extends NextApiRequest {
  body: {
    searchTerm?: string;
  };
}

export type IApiSearchResponseData = ISearchData[];

export default (
  req: IApiSearchRequest,
  res: NextApiResponse<IApiSearchResponseData>
) => {
  const {
    body: { searchTerm },
  } = req;
  if (req.method === 'POST' && searchTerm && searchTerm.length > 0) {
    const searchPattern = new RegExp(searchTerm, 'i');
    const searchResults = database.filter((result) => {
      return (
        searchPattern.test(result.title) || searchPattern.test(result.text)
      );
    });
    res.status(200).json(searchResults);
  } else {
    res.status(400).json([]);
  }
};
