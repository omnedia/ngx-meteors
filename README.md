# ngx-meteors

`@omnedia/ngx-meteors` is an Angular library that adds a mesmerizing meteor shower animation effect to your components. The meteors fly across the screen in a configurable direction and color, creating a dynamic and engaging background effect for your Angular applications.

## Features

- Meteor shower animation with customizable rotation and color.
- Flexible configuration to fit the style and theme of your application.
- Lightweight and easy to integrate as a standalone component.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-meteors
```

## Usage

Import the `NgxMeteorsComponent` in your Angular module or component:

```typescript
import { NgxMeteorsComponent } from '@omnedia/ngx-meteors';

@Component({
  ...
  imports: [
    ...
    NgxMeteorsComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-meteors
  [meteorColor]="'#ffcc00'"
  [meteorRotation]="'225deg'"
  styleClass="custom-meteor-class"
>
  <h1>Your content here</h1>
</om-meteors>
```

## API

```html
<om-meteors
  [meteorColor]="meteorColor"
  [meteorRotation]="meteorRotation"
  styleClass="your-custom-class"
>
  <ng-content></ng-content>
</om-meteors>
```

- meteorColor (optional): The color of the meteors. Accepts any valid CSS color value (e.g., #ffcc00, rgba(255, 204, 0, 1)).
- meteorRotation (optional): The rotation angle for the meteors, determining the direction of their movement. Accepts any valid CSS rotation value (e.g., '225deg').
- styleClass (optional): A custom CSS class to apply to the component's wrapper element for additional styling.

## Example

```html
<om-meteors
  [meteorColor]="'#00ffcc'"
  [meteorRotation]="'180deg'"
  styleClass="meteor-background"
>
  <div class="content">This is a meteor background effect</div>
</om-meteors>
```

This will create a meteor shower effect with cyan-colored meteors moving in a downward direction.

## Styling

To further customize the appearance of the meteors or the container, use the styleClass input to apply your own CSS classes.

```css
.meteor-background {
  background-color: #000;
  height: 100vh;
  position: relative;
}

.content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding-top: 50px;
}
```

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.