import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
    const { align = 'start', ...otherProps } = props;
    return <Flex {...otherProps} align={align} direction='column' />;
};
