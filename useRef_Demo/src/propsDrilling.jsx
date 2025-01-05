export function PropsDrilling() {
  return (
    <div>
      <h1>hey this is component A</h1>
      <ChildComponet data="hey you" />
    </div>
  );
}
const ChildComponet = ({ data }) => {
  return <GrandChild data={data} />;
};
const GrandChild = ({ data }) => {
  return <h1>{data} Peice of Crap</h1>;
};
