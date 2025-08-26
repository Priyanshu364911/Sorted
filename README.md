# Sorting Algorithm Visualizer

An interactive web application that visualizes various sorting algorithms in real-time. Built with React and Vite, this tool helps users understand how different sorting algorithms work by providing animated visual representations.

## 🚀 Features

- **Multiple Sorting Algorithms**: Visualize 5 different sorting algorithms
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort

- **Interactive Controls**:
  - Adjustable array size (5-100 elements)
  - Variable animation speed
  - Generate new random arrays
  - Real-time visualization with color-coded comparisons

- **Responsive Design**: Works seamlessly across different screen sizes
- **Clean UI**: Intuitive interface with easy-to-use controls

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Core functionality

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sorted
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🎮 Usage

1. **Generate Array**: Click "Generate New Array" to create a random array
2. **Adjust Size**: Use the array size slider to change the number of elements (5-100)
3. **Set Speed**: Use the speed slider to control animation speed
4. **Choose Algorithm**: Click on any sorting algorithm button to start visualization
5. **Watch**: Observe how the algorithm sorts the array with color-coded animations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Sorting Algorithms Explained

### Bubble Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- Repeatedly steps through the list, compares adjacent elements and swaps them if they're in the wrong order

### Selection Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- Finds the minimum element and places it at the beginning, then repeats for the remaining array

### Insertion Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- Builds the final sorted array one item at a time, inserting each element into its correct position

### Merge Sort
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(n)
- Divides the array into halves, sorts them separately, then merges them back together

### Quick Sort
- **Time Complexity**: O(n log n) average, O(n²) worst case
- **Space Complexity**: O(log n)
- Picks a pivot element and partitions the array around it, then recursively sorts the partitions

## 🎨 Color Coding

- **Teal (#508991)**: Default/unsorted elements
- **Red**: Elements being compared
- **Green**: Elements in their final sorted position
- **Yellow**: Pivot elements (in Quick Sort)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔮 Future Enhancements

- Add more sorting algorithms (Heap Sort, Radix Sort, etc.)
- Sound effects for comparisons and swaps
- Step-by-step mode with manual controls
- Algorithm complexity analysis display
- Save and share sorting sessions
- Dark/light theme toggle

## 📧 Contact

Feel free to reach out if you have any questions or suggestions for improvements!