import { TypeAnimation } from 'react-type-animation';
const quote = [
    `Thật ra cũng không có gì đặc biệt lắm! Làm ra cái web này cũng chỉ muốn chọc bà cười thui hà.
    Hãy cố hết mình cho buổi thuyết trình sắp tới nè <3
    Click thêm cái nữa nha :3`,
]

// eslint-disable-next-line react/prop-types
const TypingComponent = ({onComplectedType}) => {
    return (
        <TypeAnimation
            sequence={[
                ...quote,
                () => {
                    onComplectedType(true)
                }
            ]}
            wrapper="span"
            cursor={true}
            style={{ fontSize: '1.5em', display: 'inline-block', fontFamily: 'roboto' }}
        />
    );
};

export default TypingComponent