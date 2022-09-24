import { render, screen } from '@testing-library/react'

// components
import Helloworld from './Helloworld'

describe('HelloWorld', () => {
    test('render react component', () => {
        //given
        render(<Helloworld/>)
        // when
        const element = screen.getByText('Helloworld');
        // then
        expect(element).toBeInTheDocument();
    })

    test('should render firstname', () => {
        // given
        render(<Helloworld firstName="truong" lastName="nguyen"/>);
        // when
        const firstname = screen.getByTestId('firstName').textContent;
        // then
        expect(firstname).toEqual('truong')
    })

    test('should render lastname', () => {
        // given
        render(<Helloworld firstName="truong" lastName="nguyen"/>);
        // when
        const lastname = screen.getByTestId('lastName').textContent;
        // then
        expect(lastname).toEqual('nguyen')
    })

    test('should render open', () => {
        // given
        render(<Helloworld firstName="truong" lastName="nguyen" open={true}/>);
        // when
        const open = screen.getByTestId('open').textContent;
        // then
        expect(open).toEqual('open');
    })

    test('should not render open', () => {
        // given
        render(<Helloworld firstName="truong" lastName="nguyen" open={false}/>);
        // when
        const open = screen.getByTestId('open').textContent;
        // then
        expect(open).toEqual('');
    })
})

//render component -> find text or html dom -> expect text or html dom = your expectation