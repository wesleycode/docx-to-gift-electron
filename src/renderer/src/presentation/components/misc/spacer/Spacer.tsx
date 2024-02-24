import styled from 'styled-components';

interface Props {
    height?: string;
    width?: string;
}

const SpacerWrapper = styled.div<{ width?: string, height?: string }>`
  width: ${(value) => value.width};
  height: ${(value) => value.height};
`;

export function Spacer(props: Props) {
    return (<SpacerWrapper width={props.width} height={props.height}/>);
}