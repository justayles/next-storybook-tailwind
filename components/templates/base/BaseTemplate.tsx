export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="bg-blue-200">{sampleTextProp}</div>;
};

export default BaseTemplate;
