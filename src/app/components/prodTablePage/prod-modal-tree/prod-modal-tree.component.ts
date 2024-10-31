import { CdkTreeModule, FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ArrayDataSource } from '@angular/cdk/collections';

const TREE_DATA: ExampleFlatNode[] = [
  {
    name: 'Товари для дому',
    expandable: true,
    level: 0,
  },
  {
    name: 'Аксесуари',
    expandable: false,
    level: 1,
  },
  {
    name: 'Електроніка',
    expandable: true,
    level: 1,
  },
  {
    name: 'Побутова техніка',
    expandable: false,
    level: 2,
  },
  {
    name: 'Електроніка',
    expandable: true,
    level: 0,
  },
  {
    name: 'Смартфони',
    expandable: false,
    level: 1,
  },
  {
    name: "Комп'ютери",
    expandable: true,
    level: 1,
  },
  {
    name: 'Ноутбуки',
    expandable: false,
    level: 2,
  },
  {
    name: 'Телевізори',
    expandable: true,
    level: 1,
  },
  {
    name: '4K',
    expandable: false,
    level: 2,
  },
  {
    name: 'Товари для дітей',
    expandable: true,
    level: 0,
  },
  {
    name: 'Іграшки',
    expandable: true,
    level: 1,
  },
  {
    name: 'Конструктори',
    expandable: false,
    level: 2,
  },
  {
    name: 'Одяг',
    expandable: true,
    level: 0,
  },
  {
    name: 'Чоловічий одяг',
    expandable: true,
    level: 1,
  },
  {
    name: 'Футболки',
    expandable: false,
    level: 2,
  },
  {
    name: 'Спорт',
    expandable: true,
    level: 0,
  },
  {
    name: 'Взуття',
    expandable: true,
    level: 1,
  },
  {
    name: 'Кросівки',
    expandable: false,
    level: 2,
  },
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

@Component({
  selector: 'prod-modal-tree',
  standalone: true,
  imports: [CdkTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './prod-modal-tree.component.html',
  styleUrl: './prod-modal-tree.component.css',
})
export class ProdModalTreeComponent {
  @Output() dispatchCategory = new EventEmitter();
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );
  selectedPath: string[] = [];
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  getParentNode(node: ExampleFlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }

    return null;
  }

  selectNode(node: ExampleFlatNode) {
    if (!node.expandable) {
      // Перевіряємо, чи не є елемент гілкою
      this.selectedPath = []; // Очищуємо попереднє значення

      // Функція для отримання шляху до батьків
      const getPath = (currentNode: ExampleFlatNode) => {
        this.selectedPath.unshift(currentNode.name); // Додаємо ім'я до початку масиву
        const parent = this.getParentNode(currentNode);
        if (parent) {
          getPath(parent); // Рекурсивно викликаємо для батьківського вузла
        }
      };

      getPath(node); // Викликаємо функцію для вибраного елемента

      this.dispatchCategory.emit(this.selectedPath);
    }
  }

  shouldRender(node: ExampleFlatNode) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }
}
