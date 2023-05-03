import renderer from 'react-test-renderer';
import Button from '../Buttons';

function handleClick() {
  return 'message';
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Button value="1" span="span1" bg="bg-color" press={handleClick} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
